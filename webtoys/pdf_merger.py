import glob, os, sys
from PyPDF2 import PdfFileMerger

class Reimburser:
	def __init__(self, sysargs):
		if len(sysargs) > 1:
			self.month = sysargs[1]
			self.folder = os.path.join(self.month)
			self.pdfs = []

	def collect(self):
		for file in os.listdir(self.folder):
			if file.startswith('._'):
				try:
					os.remove(file)
				except:
					print ("Tried to delete a ._ file but couldn't")
				continue
			if file.endswith('.pdf') and file not in self.pdfs:
				self.pdfs.append(file)
        #print (os.path.join(self.folder, file))
		print (self.pdfs)

	def combine(self, outfile='result.pdf'):
		print ('Combining...')
		self.merger = PdfFileMerger()
		for pdf in self.pdfs:
			self.merger.append(open(os.path.join(self.month, pdf), 'rb'))
		with open(outfile, 'wb') as fout:
			self.merger.write(fout)
		print ('Combined', len(self.pdfs), 'files into', outfile)

# for pdf in pdfs:
#     merger.append(open(pdf, 'rb'))

# with open('result.pdf', 'wb') as fout:
#     merger.write(fout)

if __name__ == '__main__':
	print ("Starting script...")
	reimburser = Reimburser(sys.argv)
	#print (reimburser.month)
	reimburser.collect()
	reimburser.combine()

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
