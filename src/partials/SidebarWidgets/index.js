import SearchWidget from './SearchWidget';
import CategoriesWidget from './CategoriesWidget';
import SideWidget from './SideWidget';

function SidebarWidgets() {
    return (
        <div className="col-md-4">
            <SearchWidget />
            <CategoriesWidget />
            <SideWidget />
        </div>
    );
}

export default SidebarWidgets;