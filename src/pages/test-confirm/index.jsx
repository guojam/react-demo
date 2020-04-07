import React from 'react';
import Confirm from '../../components/confirm';
import Pager from '../../components/layout/pager';

class TestConfirm extends React.Component {
    render() {
        return (
            <Pager title="Confirm组件测试">
                <button
                    onClick={e => {
                        Confirm('确定删除吗').then(e =>
                            console.log('result:', e)
                        );
                    }}
                >
                    点击再次显示confirm
                </button>
            </Pager>
        );
    }
    async componentDidMount() {
        try {
            let res = await Confirm('确定删除吗');
            if (res) {
                console.log('是');
            } else {
                console.log('否');
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export default TestConfirm;
