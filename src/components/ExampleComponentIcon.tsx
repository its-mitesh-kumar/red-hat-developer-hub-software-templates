import React from 'react';

import { SidebarItem } from '@backstage/core-components';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { IconComponent } from '@backstage/core-plugin-api';


export const ExampleComponentIcon = () => {

  return (
    <SidebarItem text="pluging-test-8" to="/pluging-test-8" icon={PermIdentityOutlinedIcon as IconComponent} />
  );
};
