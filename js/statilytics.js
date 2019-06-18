const yyyymmdd = (date) => {
  let d = new Date(date),
      month = '' + (d.getUTCMonth() + 1),
      day = '' + d.getUTCDate(),
      year = d.getUTCFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const timestamp = (date) => {
  let d = new Date(date),
    hours = d.getUTCHours(),
    lbd = hours,    
    ubd = hours + 1;
  while (lbd % 3 != 0) lbd--;
  while (ubd % 3 != 0) ubd++;
  console.log("hours: " + hours);
  return `${lbd>9?'':'0'}${lbd}00_${ubd>9?'':'0'}${ubd}00`;
};

const endpoint = (request) => {
  return endpoints.url.base 
    + endpoints.url.functions 
    + endpoints.testing[request];
};

const trackPageView = (table, url) => {
  let hourblock = timestamp(Date.now());
  console.log(`statilytics is good to go: ${url} (${hourblock})`);
  // Retrieve records for today's date
  table.select({
    view: "Today",
    filterByFormula: `Page = '${url}'`,
    maxRecords: 2,
  }).firstPage((error, records) => {
    if (!records) {
      console.log(error);
      return;
    }

    // TODO: if this client's IP has already recorded a session for this page today, skip this
    records.forEach((record) => {
      recordCount++;

      let visited = record.get(hourblock);
      console.log('Retrieved ', visited);
      visited++;
      table.update(record.getId(), {
          [hourblock]: visited
        }, (err, record) => {
          if (err) {
            console.log(err);
            return;
          }
      });

      if (recordCount == 0) {
        table.Create({
          "Date": yyyymmdd(Date.now()),
          "Page": document.URL,
          [hourblock]: 1,
        }, (err, record) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('Created new record because none present: ' + record.getId());
        });
      } else if (recordCount > 1) {
        console.log('Requested to delete duplicate record: ' + record.getId());
        table.destroy(record.getId(), (err, deletedRecord) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('Deleted ' + deletedRecord.getId());
        });
      }
    });
  });
};


document.addEventListener("DOMContentLoaded", async (event) => {
  let recordCount = 0;
  let Airtable = require('airtable');
  // API safety TODOs:
  // POST to a server which returns the key only if the POST header matches my domain
  // Server just ignores request if we crossed API rate limit
  if (typeof keys !== undefined) {
    let base = new Airtable({apiKey: keys['airtable']['api_key']}).base(keys['airtable']['base']);
    let table = base('site-analytics');
    trackPageView(table, document.URL);
  }
  console.log("statilytics in dev mode, sandboxing..." + endpoint("sandbox"));

  let response = await fetch(
    endpoint("sandbox"), {
      method: "POST",
      body: {},
      headers: new Headers({}),
    });
  console.log("response:");
  console.log(response);
  let data = await response.json();
  console.log("data:");
  console.log(data);
  // if (norecord)
/*
  table.create({
    "Date": yyyymmdd(Date.now()),
    "Page": document.URL,
    "Visitors": 111,
  }, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  });
*/
  // Update today's record by updating timestamps and visitors++
  
});
