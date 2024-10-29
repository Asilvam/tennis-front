import React from 'react';
import Reserves from './Reserves';

const ParentComponent: React.FC = () => {
    const timeSlots = [
        {
            time: '08:15 - 10:00',
            slots: [
                { status: 'available', court: 'Cancha 1' },
                { status: 'available', court: 'Cancha 2' },
                { status: 'available', court: 'Cancha 3' },
            ]
        },
        {
            time: '10:15 - 12:00',
            slots: [
                { status: 'unavailable', name: 'J. Doe, W. Wallace', court: 'Cancha 1' },
                { status: 'unavailable', name: 'A. Smith, B. Brown', court: 'Cancha 2' },
                { status: 'unavailable', name: 'J. Bell, L. Cruz', court: 'Cancha 3' },
            ]
        },
        {
            time: '12:15 - 14:00',
            slots: [
                { status: 'available', court: 'Cancha 1' },
                { status: 'unavailable', name: 'C. Johnson, D. Lee', court: 'Cancha 2' },
                { status: 'unavailable', name: 'O. Black, E. Cook', court: 'Cancha 3' },
            ]
        },
        {
            time: '14:15 - 16:00',
            slots: [
                { status: 'available', court: 'Cancha 1' },
                { status: 'available', court: 'Cancha 2' },
                { status: 'available', court: 'Cancha 3' },
            ]
        },
        {
            time: '16:15 - 18:00',
            slots: [
                { status: 'unavailable', name: 'S. Davis, T. Clarke', court: 'Cancha 1' },
                { status: 'available', court: 'Cancha 2' },
                { status: 'available', court: 'Cancha 3' },
            ]
        },
        {
            time: '18:15 - 20:00',
            slots: [
                { status: 'unavailable', name: 'M. Scott, L. Young', court: 'Cancha 1' }, // 2 players
                { status: 'available', court: 'Cancha 2' },
                { status: 'available', court: 'Cancha 3' },
            ]
        },
        // Time slots starting from 20:00 onwards
        {
            time: '20:00 - 22:00',
            slots: [
                { status: 'unavailable', name: 'P. Parker, R. King', court: 'Cancha 1', isPaid: true }, // 2 players
            ]
        },
        {
            time: '22:00 - 00:00',
            slots: [
                { status: 'unavailable', name: 'A. Perez, T. Brown, J. Smith, L. Davis', court: 'Cancha 1', isPaid: true }, // 4 players
            ]
        },
    ];

    return (
        <div>
            <Reserves timeSlots={timeSlots}/>
        </div>
    );
};

export default ParentComponent;
