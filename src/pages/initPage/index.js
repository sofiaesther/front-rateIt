import React, {useEffect} from 'react';

import {GeralStyle, TopMenuStyle} from '../../styles/dashboardStyle';
import {SideMenu} from '../sideMenu/index';
import {LogoDashboard} from '../../components/logo/logodashboard';

function InitPage() {
  useEffect(()=>{},[]);
  
    return (
      <GeralStyle>
        <SideMenu />
        <TopMenuStyle>
          <LogoDashboard />
        </TopMenuStyle>
      </GeralStyle>
    );
  }
  
export {InitPage};