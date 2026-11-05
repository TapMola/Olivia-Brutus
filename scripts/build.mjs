import './check.mjs';
import { mkdir, cp } from 'node:fs/promises';
await mkdir('dist', {recursive:true});
for (const file of ['index.html','styles.css','assets','olivia-brutus.vcf']) await cp(file, `dist/${file}`, {recursive:true});
console.log('Build listo en dist/ (sitio estático, sin dependencias).');
