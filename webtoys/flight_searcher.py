# Sample
# http://www.kayak.com/flights/BOM-HKG/2015-02-18/HKG-TYO/2015-03-04/TYO-ICN/2015-04-01/ICN-TPE/2015-04-29
# date format YYYY-MM-DD

from datetime import date, timedelta

prefix = "http://www.kayak.com/flights"
sep = "/"

base_options = ["BOM", "MCT", "COK"]
stops_base = ["HKG", "TPE", "TYO"]

# Range
start_dates = [date.today() + timedelta(29)]
dests = { "HKG": (14, -2, 0), "TPE": (28, -7, 7), "TYO": (28, -7, 7), "COK": (0,0,0) }

def leg(start, stop, departure):
	return start+"-"+stop+sep+str(departure)

# For all start options, ending at each stop option, starting at any start date
def build_query():
	stops = [base_options[2]] + stops_base + [base_options[2]]
	print (len(stops))
	departure = start_dates[0]
	query_string = prefix + sep
	for i in range(len(stops_base)+1):
		query_string += leg(stops[i], stops[i+1], departure) + sep
		departure += timedelta(dests[stops[i+1]][0])
	print (query_string)

build_query()