import FilterWraper from "./wraperComponents/FilterWraper";
import {IFilter} from "./interface";
import FilerConstractor from "./filerConstractor";
import {ReactComponent as TestIcon} from "../../assets/filter/testIcon.svg";

function Filter({open, onClose}: IFilter) {
    // options={Array(101).fill(0).map((_, i: number) => (i * (max - min) / 100) + min)}
    const tempOptions =Array(101).fill(0).map((_, i: number) => {
        return {value:i * (10000 - 500) / 100 + 500,count:Math.random()*100}
    })

    function getOptions(min:number, max: number){
        return Array(max-min+1).fill(0).map((_, i: number) => {
            return i + min
        })
    }

    const data = [
        {
            type: "chip",
            header: "Тип заведения",
            size:"big",
            chipList: [
                {
                    text: "Любой тип",
                    icon: <TestIcon/>,
                    active:false,
                },
                {
                    text: "Клубы",
                    icon: <TestIcon/>,
                    active:false,
                },
                {
                    text: "Бары",
                    icon: <TestIcon/>,
                    active:false,
                },
                {
                    text: "Караоке",
                    icon: <TestIcon/>,
                    active:true,
                },
                {
                    text: "Стриптиз-клубы",
                    icon: <TestIcon/>,
                    active:true,
                },
                {
                    text: "Концертные площадки",
                    icon: <TestIcon/>,
                    active:false,
                },
                {
                    text: "Вечеринки",
                    icon: <TestIcon/>,
                    active:false,
                },
            ]
        },
        {
            type: "chip",
            header: "День недели",
            size:"small",
            chipList: [
                {
                    text: "ПН",
                    active:false,
                },
                {
                    text: "ВТ",
                    active:false,
                },
                {
                    text: "СР",
                    active:false,
                },
                {
                    text: "ЧТ",
                    active:true,
                },
                {
                    text: "ПТ",
                    active:true,
                },
                {
                    text: "СБ",
                    active:false,
                },
                {
                    text: "ВСК",
                    active:false,
                },
            ]
        },
        {
            type: "range",
            header: "Аудитория",
            min:16,
            max:60,
            unit:"лет",
            options:getOptions(16,60)
        },
        {
            type: "rangebar",
            header: "Ценовой диапазон",
            min:500,
            max:10000,
            optionsCount:tempOptions,
            unit:"₽",
        },
        {
            type: "rangeTime",
            min:"23:00",
            max:"05:00",
            header: "Время работы заведения",
            hasHide:true,
        },
        {
            type: "locationSelect",
            header: "Метро",
        },



    ]
    return (
        <>
            {
                open ? <FilterWraper onClose={onClose}>
                        <FilerConstractor config={data}/>
                    </FilterWraper>
                    : null
            }
        </>
    );
}

export default Filter;