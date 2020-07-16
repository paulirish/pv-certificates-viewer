import { Timestamp } from '@peculiar/asn1-adobe-acrobat';

import { rowValue } from '../row_value';
import { Extension } from '../../../crypto/extension';

import { basic } from './basic';
import { generalName } from './general_name';

export function timestamp(
  extension: Extension,
  value: Timestamp,
  options: IGeneralNameOptions,
) {
  return basic(
    extension,
    [
      rowValue(
        'Version',
        value.version,
      ),
      generalName(value.location, options),
      rowValue(
        'Requires Auth',
        value.requiresAuth ? 'YES' : 'NO',
      ),
    ],
  );
}
