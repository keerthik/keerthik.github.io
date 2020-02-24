import glob, os, sys
from PyPDF2 import PdfFileMerger
import PyPDF2

print(PyPDF2.__file__)
"""
Initialize with the month expected to look inside in the child.
Launch this script from the parent folder of all the reimbursements
Reimbursement> $ python3 ~/personal/source_korc/source/webtoys/reimburse.py 2019_09
"""
class Reimburser:
	def __init__(self, sysargs):
		if len(sysargs) > 1:
			self.month = sysargs[1]
			self.folder = os.path.join(self.month)
			self.pdfs = []
			self.has = { 'PHONE': False, 'TRANSIT': False, 'INTERNET': False, 'OFFICE': False }

	def hasAll(self):
		result = True
		for val in self.has.values():
			result = result and val
		return result

	def collect(self):
		for file in os.listdir(self.folder):
			if file.startswith(self.month):
				try:
					os.remove(file)
				except:
					print ("Tried to delete pre-existing reimbursement compilation but couldn't")
				continue
			if file.startswith('phone_'):
				self.has['PHONE'] = True
			if file.startswith('transit_'):
				self.has['TRANSIT'] = True
			if file.startswith('internet_'):
				self.has['INTERNET'] = True
			if file.startswith('._'):
				try:
					os.remove(file)
				except:
					print ("Tried to delete a ._ file but couldn't")
				continue

		for file in os.listdir(self.folder):
			if file.endswith('.pdf') and file not in self.pdfs:
				self.pdfs.append(file)
        #print (os.path.join(self.folder, file))
		try: 
			self.pdfs.append('../office_rent_nyc.pdf')
			self.has['OFFICE'] = True
		except:
			print ("Office rent not found")
		print (self.pdfs)
		print (self.has)

	def combine(self, outfile='result'):
		if '.pdf' not in outfile:
			outfile += '.pdf'
		print ('Combining...')
		self.merger = PdfFileMerger()
		for pdf in self.pdfs:
			_fi = open(os.path.join(self.month, pdf), 'rb')
			self.merger.append(_fi)
		if len(self.pdfs) == 0:
			return
		with open(outfile, 'wb') as fout:
			self.merger.write(fout)
		print ('Combined', len(self.pdfs), 'files into', outfile)

# for pdf in pdfs:
#     merger.append(open(pdf, 'rb'))

# with open('result.pdf', 'wb') as fout:
#     merger.write(fout)

if __name__ == '__main__':
	print ("Starting reimbursement script...")
	reimburser = Reimburser(sys.argv)
	#print (reimburser.month)
	reimburser.collect()
	reimburser.combine(sys.argv[1])

	# firstArg = ''
	# if len(sys.argv) == 1:
	# 	helptext = """
	# 	Call parameters:
	# 	\t--all          \t: outputs all content ids metadata json formated
	# 	\t--maintenance  \t: outputs a job script which should update content servers when run
	# 	\tcontentID      \t: outputs only the content_id metadata json formated
	# 	"""
	# 	print (helptext)
	# else:
	# 	firstArg = sys.argv[1]

	# 	if firstArg == "--all":
	# 		ShowAllMetadataJson()
	# 	if firstArg == "--maintenance":
	# 		if len(sys.argv) > 2:
	# 			Maintenance(sys.argv[2])
	# 		else:
	# 			Maintenance()
	# 	else:
	# 		UpdateMetadataJsonFor( firstArg )
