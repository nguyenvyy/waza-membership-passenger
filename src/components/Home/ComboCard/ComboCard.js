import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './ComboCard.scss';
import { formatVND } from '../../../utils';
import { Card } from 'antd';
import { calculateSaveMoneyOfCombo } from '../../../redux/selector/combo';
import { comboDetailPath } from '../../../config/route-config';

export const ComboCard = ({ combo }) => {
	const contentRef = useRef(null);
    const [ displayMore, setDisplayMore ] = useState(false);
    const saveMoney = useMemo(() => calculateSaveMoneyOfCombo(combo), [combo])
	useEffect(
		() => {
			let content = contentRef.current.textContent;
			if (content.length > 200) {
				contentRef.current.textContent = content.slice(0, 200) + '...';
				setDisplayMore(true);
			} else {
				setDisplayMore(false);
			}
		},
		[ contentRef ]
	);
	return (
		<div className="combo-card">
			<Card size="small" title={combo.combo_name} bodyStyle={{ height: '240px' }}>
				<div className="combo-card__body">
					<div>
						<p className="save-money">Tiết kiệm đ{formatVND(saveMoney)}</p>
						<div className="content">
							<p ref={contentRef}>
                                {combo.description}
							</p>
							{displayMore && <Link to="/p/combo/detail/id">xem chi tiết</Link>}
						</div>
					</div>
					<div className="combo-card__footer d-flex-center">
						<Link className="link" to={{
                            pathname: `${comboDetailPath}/${combo._id}`,
                            state: {
                                combo
                            }
                        }}>
							Mua Ngay
						</Link>
					</div>
				</div>
			</Card>
		</div>
	);
};
