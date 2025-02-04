/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { h, FunctionalComponent } from '@stencil/core';
import { SubjectDirectoryAttributes } from '@peculiar/asn1-x509';

import { Extension } from '../../../crypto/extension';
import { RowValue } from '../row';
import { getStringByOID } from '../get_string_by_oid';

import { BasicExtension } from './basic_extension';
import { getAttributeValue } from './attribute_value';

interface ISubjectDirectoryAttributesExtensionProps {
  extension: Extension<SubjectDirectoryAttributes>;
}

export const SubjectDirectoryAttributesExtension:
FunctionalComponent<ISubjectDirectoryAttributesExtensionProps> = (props) => {
  const { extension } = props;

  return (
    <BasicExtension
      extension={extension}
    >
      {extension.value.map((attribute, arrayIndex) => ([
        <RowValue
          name={`Attribute #${arrayIndex + 1}`}
          value=""
        />,
        <RowValue
          name="Type"
          value={getStringByOID(attribute.type)}
        />,
        <RowValue
          name="Value"
          value={getAttributeValue(attribute)}
        />,
      ]))}
    </BasicExtension>
  );
};
