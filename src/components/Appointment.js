import React from 'react';
import PropTypes from 'prop-types'

const Appointment = ({ appointment, deleteAppointment, index}) => (
    <div data-testid={`appointment${index}`} className="appointment">
        <p>Pet: <span data-testid="pet">{appointment.pet}</span></p>
        <p>Owner: <span data-testid="owner">{appointment.owner}</span></p>
        <p>Date: <span data-testid="date">{appointment.date}</span></p>
        <p>Time: <span data-testid="time">{appointment.time}</span></p>
        <p>Symptoms: <span data-testid="symptoms">{appointment.symptoms}</span></p>

        <button
            className="button delete u-full-width"
            onClick={() => deleteAppointment(appointment.id)}
            data-testid="btn-delete"
        >
            Delete
        </button>
    </div>
);

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}
export default Appointment;