import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const html = readFileSync('index.html', 'utf8');
const links = [...html.matchAll(/<a\b([^>]*)>/g)];
assert.equal(links.length, 7, 'Deben existir siete acciones');
for (const [, attributes] of links) {
  const href = attributes.match(/href="([^"]+)"/)?.[1];
  assert(href && href !== '#');
  if (href.startsWith('https:')) assert(attributes.includes('noopener noreferrer'));
  if (href.includes('/maps/')) {
    const url = new URL(href.replaceAll('&amp;', '&'));
    assert.equal(url.searchParams.get('api'), '1');
    assert.equal(url.searchParams.get('query_place_id'), 'ChIJo3rfLQApQg0Rxdo9IRENZW4');
  }
}
for (const [, path] of html.matchAll(/(?:href|src)="([^":]+)"/g)) assert(existsSync(path), `Recurso ausente: ${path}`);
for (const name of ['assets/editorial-small.webp', 'assets/editorial.webp', 'assets/logo.png', 'assets/red-hat-text.woff2']) assert(existsSync(name));
const vcf = new TextDecoder('utf-8', {fatal:true}).decode(readFileSync('olivia-brutus.vcf'));
assert(!/(?<!\r)\n/.test(vcf));
assert(vcf.startsWith('BEGIN:VCARD\r\nVERSION:3.0\r\n'));
assert(vcf.endsWith('END:VCARD\r\n'));
for (const line of vcf.split('\r\n')) assert(Buffer.byteLength(line) <= 75);
const unfolded = vcf.replaceAll('\r\n ', '');
for (const value of ['FN:Olivia Brutus','ORG:Olivia Brutus','+34914357451','info@oliviabrutus.com','Paseo de la Castellana 176','España']) assert(unfolded.includes(value));
assert(!html.includes('wa.me'));
console.log('OK: siete acciones, enlaces seguros, recursos locales y vCard 3.0 UTF-8.');
