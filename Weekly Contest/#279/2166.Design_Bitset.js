/**
 * @param {number} size
 */
 var Bitset = function(size) {
  this.size = size;
  this.cnt = 0;
  this.isFlip = false;
  this.bs = new Array(size).fill(0);
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
  if (this.isFlip) {
    if (this.bs[idx] === 1) {
      this.cnt++;
    }
    this.bs[idx] = 0;
  }
  else {
    if (this.bs[idx] === 0) {
      this.cnt++;
    }
    this.bs[idx] = 1;
  }
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
  if (this.isFlip) {
    if (this.bs[idx] === 0) {
      this.cnt--;
    }
    this.bs[idx] = 1;
  }
  else {
    if (this.bs[idx] === 1) {
      this.cnt--;
    }
    this.bs[idx] = 0;

  }
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
  this.cnt = this.size - this.cnt;
  this.isFlip = !this.isFlip;
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
  return this.size === this.cnt;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
  return this.cnt > 0;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
  return this.cnt;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
  if (this.isFlip) {
    this.bs = this.bs.map(bit => bit ? 0 : 1);
    this.isFlip = false;
  }

  return this.bs.join('');
};

/** 
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */