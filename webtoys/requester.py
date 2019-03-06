import venmo

creds_path = '/Users/keerthik/Desktop/venmo_creds.txt'
print (venmo)
f = open(creds_path, 'r', encoding = 'utf-8');
email = f.readline()
password = f.readline()