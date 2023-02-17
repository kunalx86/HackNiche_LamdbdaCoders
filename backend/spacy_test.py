import spacy

NER = spacy.load("en_core_web_sm")

raw_text = "ICICI Bank Acct XX871 debited for $153.0 on 16/02/2023; DMART Ready credited"

ner_text = NER(raw_text)

for word in ner_text:
    print(word.text, word.pos_)