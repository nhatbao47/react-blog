import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {getCategories} from '../../../actions/categoryActions';

function CategoriesWidget() {
    const {category} = useSelector(state => {
        return {
            category: state.category
        }
    });

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const listItems = (items, result) => {
        const data = items.map((item, index) => {
            if ((index + 1) % 2 === result) {
                return (
                    <li key={index}>
                        <NavLink to={'/category/' + item.id + '/' + item.name}>{item.name}</NavLink>
                    </li>
                );
            } else {
                return '';
            }
        });
        return data;
    };

    const leftItems = category.data.length > 0 && listItems(category.data, 1);
    const rightItems = category.data.length > 0 && listItems(category.data, 0);
    
    return (
        <div className="card my-4">
            <h5 className="card-header">Categories</h5>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                            {leftItems}
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                            {rightItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesWidget;