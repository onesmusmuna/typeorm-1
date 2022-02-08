import { dbConnect } from './db.connect';
import { app } from './app';

function main() {
  dbConnect();
  app();
}

main();
