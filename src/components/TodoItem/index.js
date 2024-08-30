function TodoItem(props) {
    const {data} = props;
    return (
        <li>
            <div>
                <input type='checkbox' defaultChecked={ data.completed }/>
            </div>
            <span style={ {'textDecoration': data.completed ? 'line-through' : 'none'} }>
                { data.content }
            </span>
            <div>
                <button>查看</button>
                <button>编辑</button>
                <button>删除</button>
            </div>
        </li>
    );
}

export default TodoItem;
