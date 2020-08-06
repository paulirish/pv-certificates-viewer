import { h, FunctionalComponent } from '@stencil/core';
import { CRLDistributionPoints } from '@peculiar/asn1-x509';

import { Extension } from '../../../crypto/extension';

import { BasicExtension } from './basic_extension';
import { GeneralNamePart } from './general_name_part';

interface ICRLDistributionPointsExtensionProps extends IGeneralNameOptions {
  extension: Extension<CRLDistributionPoints>;
}

export const CRLDistributionPointsExtension:
  FunctionalComponent<ICRLDistributionPointsExtensionProps> = (props) => {
    const { extension } = props;

    return (
      <BasicExtension
        extension={extension}
      >
        {extension.value.map(point => (
          point?.distributionPoint?.fullName.map(gn => (
            <GeneralNamePart
              generalName={gn}
              {...props}
            />
          ))
        ))}
      </BasicExtension>
    );
  };
