// Default record data for the Gate Pass table.
// This object stores the editable fields shown in the table row.
const defaultRecord = {
  registrationNo: 'KDXXXXXX',
  date: '2026-02-28',       // ISO format: YYYY-MM-DD
  returnDate: '2026-04-15', // ISO format: YYYY-MM-DD
  outTime: '13:01',         // 24-hour format: HH:MM
  inTime: '13:01',          // 24-hour format: HH:MM
  createdAt: '2026-02-27'   // ISO format: YYYY-MM-DD
};

export default defaultRecord;
