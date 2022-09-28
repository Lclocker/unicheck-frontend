import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles';
import { Button } from 'antd';
import { UserOutlined, BellFilled } from '@ant-design/icons';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginRight: '10px', 
            gap: '5px' 
          }}>
          <Button
            type='primary'
            icon={<UserOutlined  style={{ color: 'white', fontSize: '20px' }}/>}
            onClick={() => (console.log('botão perfil'))}
            style={{ 
              backgroundColor: 'blue', 
              border: 'none', 
              cursor: 'pointer',
            }}
          />
          <Button
            type='primary'
            icon={<BellFilled style={{ color: 'white', fontSize: '20px' }}/>}
            onClick={() => (console.log('botão notificação'))}
            style={{ 
              backgroundColor: 'blue', 
              border: 'none',
              cursor: 'pointer'
            }}
          />
        </div>
        {/* <NavMenu>
          <NavLink to='/schoolClass' activeStyle>
            School Class
          </NavLink>
          <NavLink to='/subjects' activeStyle>
            Subjects
          </NavLink>
          <NavLink to='/schools' activeStyle>
            Schools
          </NavLink>

        </NavMenu> */}
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
