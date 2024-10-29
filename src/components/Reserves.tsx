import React from 'react';
import '../styles/Reserves.css';

interface Slot {
    status: string;
    name?: string;
    court: string;
    isPaid?: boolean;
}

interface TimeSlot {
    time: string;
    slots: Slot[];
}

interface ReservesProps {
    timeSlots: TimeSlot[];
}

const Reserves: React.FC<ReservesProps> = ({ timeSlots }) => {
    return (
        <div className="flex flex-col items-center">
            {timeSlots.map((timeSlot, index) => (
                <div key={index} className="time-slot-container">
                    <div className="time-slot-time">{timeSlot.time}</div>
                    <div className="time-slot-courts">
                        {timeSlot.slots.map((slot, idx) => (
                            <div
                                key={idx}
                                className={`time-slot ${slot.status} ${slot.isPaid ? 'paid' : ''}`}
                            >
                                <div className="time-slot-court">{slot.court}</div>
                                {slot.status === 'unavailable' &&(
                                    <div className="time-slot-name"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reserves;
