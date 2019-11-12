import React, { useState } from 'react';
import { Drawer } from 'antd';
import { ComboPanel } from './Panel/Panel';

export const keys = {
	browser: 1,
	myCombo: 2
}

export const Combo = ({ visible, handleClose }) => {
	const [ activeKey, setActiveKey ] = useState(1);
    const handleChangeKey = (key) => {
        setActiveKey(key)
    }
	return (
		<Drawer
			height="100vh"
			title="Gói Hội Viên"
            placement="bottom"
            bodyStyle={{padding: '0'}}
			headerStyle={{ display: 'flex', fontWeight: '800', justifyContent: 'center', alignItems: 'center', borderBottom: 'none' }}
			closable={true}
			onClose={handleClose}
			visible={visible}
		>
            <ComboPanel handleChangeKey={handleChangeKey} activeKey={activeKey} />

		</Drawer>
	);
};
