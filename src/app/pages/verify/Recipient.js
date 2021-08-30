const m = require('mithril');
const { FormGroup, FormLabel, Icon, Icons, Input } = require('construct-ui');

function Recipient() {
  return {
    view: function () {
      return m(FormGroup, [
        m(FormLabel, 'Holder: (Sam Smith)'),
        m(Input, {
          contentLeft: m(Icon, { name: Icons.HASH }),
          fluid: true,
          readOnly: true,
          type: 'text',
          value: 'EpXprWFWmvJx4dP7CqDyXRgoigTVFwEUh6i-6jUCcoU8',
        }),
      ]);
    },
  };
}

module.exports = Recipient;
