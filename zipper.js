const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml')

class Zipper {
  constructor(options = {}) {
    this.config = null;
    this.path = options.path || process.cwd();
    
    this.load();
  }
  
  load() {
    const zipath = path.join(this.path, '.zipconfig');
    const zipconfig = fs.readFileSync(zipath);
    
    try {
      this.config = yaml.safeLoad(zipconfig);
    }
    catch (e) {
      throw e;
    }
  }
  
  zip() {
    cp.execSync(`zip -r ${this.path}/${this.config.name}.zip ${this.path}/* --exclude ${this.config.exclude.join(' ')}`);
  }
}

module.exports = Zipper;