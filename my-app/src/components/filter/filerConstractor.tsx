import FilterItemWraper from "./wraperComponents/FilterItemWraper";
import FilterWidgetsWraper from "./wraperComponents/filterWidgetsWraper";
import Chips from "./filterWidgets/chips/Chips";
import Range from "./filterWidgets/range/Range";

function FilterConsstractor({config}: any) {

    const renderWidget = (item:any)=>{
        switch(item.type) {
            case 'chip':
                return <Chips list={item.chipList} size={item.size}/>
            case 'range':
                return <Range min={item.min} max={item.max} unit={item.unit} options={item.options} type={"Default"}/>
            case 'rangebar':
                return <Range min={item.min} max={item.max} unit={item.unit} options={item.options} optionsCount={item.optionsCount} type={"Bar"}/>

        }
    }

    return (
        <FilterItemWraper>
            {
                config.map((item:any) => {
                    return (
                        <FilterWidgetsWraper header={item.header} key={item}>
                            {renderWidget(item)}
                        </FilterWidgetsWraper>
                    )
                })
            }
        </FilterItemWraper>
    );
}

export default FilterConsstractor;