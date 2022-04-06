import { francAll } from 'franc';
import langs from 'langs';

const [node, script, input] = process.argv;
const { log } = console;

const getLanguage = (code) => langs.where("3", code);

const language = getLanguage(francAll(input).find(([language]) => getLanguage(language))?.[0])?.name;

log(language ? `The language is probably ${language}.` : `Could not match a language. Please try again.`);



