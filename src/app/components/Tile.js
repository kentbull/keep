const m = require('mithril');
const TileHeader = require('./TileHeader');
const { Colors } = require('construct-ui');

function Tile() {
  return {
    view: function (vnode) {
      return m(
        '.tile',
        {
          style: {
            background: Colors.WHITE,
            boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
          },
        },
        m(TileHeader, { ...vnode.attrs }),
        vnode.children
      );
    },
  };
}

module.exports = Tile;
