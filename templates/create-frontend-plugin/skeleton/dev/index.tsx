import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { plugin, PluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(plugin)
  .addPage({
    element: <PluginPage />,
    title: 'Root Page',
    path: '/${{values.plugin_id}}',
    icon: () => <PermIdentityOutlinedIcon />
  })
  .render();
