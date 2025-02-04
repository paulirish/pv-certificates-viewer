/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { h, FunctionalComponent } from '@stencil/core';
import { QCStatements } from '@peculiar/asn1-x509-qualified';
import { Convert } from 'pvtsutils';

import { RowValue } from '../row';
import { Extension } from '../../../crypto/extension';
import { getStringByOID } from '../get_string_by_oid';

import { BasicExtension } from './basic_extension';

interface IQCStatementsExtensionProps {
  extension: Extension<QCStatements>;
}

export const QCStatementsExtension: FunctionalComponent<IQCStatementsExtensionProps> = (props) => {
  const { extension } = props;

  return (
    <BasicExtension
      extension={extension}
    >
      {extension.value.map((statement, arrayIndex) => ([
        <RowValue
          name={`Statement #${arrayIndex + 1}`}
          value=""
        />,
        <RowValue
          name="ID"
          value={getStringByOID(statement.statementId)}
        />,
        <RowValue
          name="Info"
          value={statement.statementInfo.byteLength ? Convert.ToHex(statement.statementInfo) : null}
          monospace
        />,
      ]))}
    </BasicExtension>
  );
};
