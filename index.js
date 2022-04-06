import { francAll } from 'franc';
import langs from 'langs';

const input = process.argv[2];
const { log } = console;

const getLanguage = (code) => langs.where("3", code);

const language = getLanguage(francAll(input).find(([code]) => getLanguage(code))?.[0])?.name;

log(language ? `The language is probably ${language}.` : `Could not match a language. Please try again.`);



