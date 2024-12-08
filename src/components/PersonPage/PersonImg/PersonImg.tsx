import { useDispatch, useSelector } from 'react-redux'
import styles from './PersonImg.module.css'
import { addPerson, removePerson } from '../../../store/slice'
import { PersonImgProps } from '../../../containers/PersonPage/PersonPage'


const PersonImg: React.FC<PersonImgProps> = ({ personId, personImg, personName }) => {
	const dispatch = useDispatch()
	const favourites = useSelector(
		(state: { favourites: { favoriteIds: string[] } }) => state.favourites.favoriteIds,
	)
	const isFavourite = favourites.includes(personId)

	const handleToggleFavourite = () => {
		if (isFavourite) {
			dispatch(removePerson(personId))
		} else {
			dispatch(addPerson(personId))
		}
	}

	return (
		<>
			<img src={personImg} alt={personName} />
			<button onClick={handleToggleFavourite}>
				{isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}
			</button>
		</>
	)
}

export default PersonImg