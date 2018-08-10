const Test = require('tape');
const Zipper = require('../zipper');

const fs = require('fs');
const path = require('path');

Test('zipper', t => {
  
  function teardown() {
    const configpath = path.join(__dirname, './fixtures');
    fs.unlinkSync(path.join(configpath, `zipper.zip`));
  }
  
  t.test('init', t => {
    const configpath = path.join(__dirname, './fixtures');
    const zipper = new Zipper({ path: configpath });
    console.log(zipper);
    t.ok(zipper, 'zipper should be defined');
    t.ok(zipper.path === configpath, 'zipper default path should be set path');
    t.end();
  });
  
  t.test('load', t => {
    const configpath = path.join(__dirname, './fixtures');
    console.log(`configpath ${configpath}`);
    
    const zipper = new Zipper({ path: configpath });
    zipper.load();
    t.end();
  });
  
  t.test('zip', t => {
    const configpath = path.join(__dirname, './fixtures');
    const zipper = new Zipper({ path: configpath });
    zipper.zip();
    
    const exists = fs.existsSync(path.join(configpath, `${zipper.config.name}.zip`));
    t.ok(exists, 'zip file should be available');
    
    t.end();
  });
  
  t.test('teardown', t => {
    teardown();
    t.end();
  });
  
});