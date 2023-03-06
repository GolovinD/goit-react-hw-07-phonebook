import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contact} id={id}>
      <p>
        {name}: <span>{number}</span>
      </p>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
