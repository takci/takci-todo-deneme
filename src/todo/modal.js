import { useSelector } from "react-redux"
import modals from "../modals"

export default function Modal() {

    const { name, data } = useSelector(state => state.modal)

    const modal = modals.find(m => m.name === name)

    if(!modal) {
        return (
            <div>Modal Bulunamadi</div>
        )
    }

    const ModalElement = modal.element ;

    return (
        <div>
            <ModalElement data={data} />
        </div>
    )
}