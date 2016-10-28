L.format={};
/**
 * @classdesc
 * Generic format for reading non-feature XML data
 *
 * @constructor
 * @struct
 */
L.format.XML = function() {
};


/**
 * @param {Document|Node|string} source Source.
 * @return {Object} The parsed result.
 */
L.format.XML.prototype.read = function(source) {
  if (L.xml.isDocument(source)) {
    return this.readFromDocument(/** @type {Document} */ (source));
  } else if (L.xml.isNode(source)) {
    return this.readFromNode(/** @type {Node} */ (source));
  } else if (typeof source === 'string') {
    var doc = L.xml.parse(source);
    return this.readFromDocument(doc);
  } else {
    return null;
  }
};


/**
 * @abstract
 * @param {Document} doc Document.
 * @return {Object} Object
 */
L.format.XML.prototype.readFromDocument = function(doc) {};


/**
 * @abstract
 * @param {Node} node Node.
 * @return {Object} Object
 */
L.format.XML.prototype.readFromNode = function(node) {};