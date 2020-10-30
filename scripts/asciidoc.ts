import Asciidoctor from 'asciidoctor';
// @ts-ignore
import plantuml from 'asciidoctor-plantuml';
import { join } from 'path';

import { logger } from '../src/shared/logger';

const asciidoctor = Asciidoctor();
logger.info(`Asciidoctor.js ${asciidoctor.getVersion()}`);

plantuml.register(asciidoctor.Extensions);

const options = {
  safe: 'safe',
  attributes: { linkcss: true },
  base_dir: 'doc/',
  to_dir: 'html',
  mkdirs: true,
};
asciidoctor.convertFile(join('doc', 'entwicklerhandbuch.adoc'), options);
logger.info(
  `HTML-Datei ${join(
    __dirname,
    '..',
    'doc',
    'html',
    'entwicklerhandbuch.html'
  )}`
);
