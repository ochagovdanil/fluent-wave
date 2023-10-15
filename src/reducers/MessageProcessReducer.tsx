type ActionType = {
	type: 'update_message' | 'update_sending';
	message?: string;
	isSending?: boolean; // spinner loader indicator
};
type StateType = Required<Omit<ActionType, 'type'>>;

function messageProcessReducer(
	state: StateType,
	action: ActionType
): StateType {
	switch (action.type) {
		case 'update_message': {
			return { ...state, message: action.message! };
		}
		case 'update_sending': {
			return { ...state, isSending: action.isSending! };
		}
		default:
			throw Error(`Unknown action type: ${action.type}!`);
	}
}

export type { StateType };
export { messageProcessReducer };
