export const withLogger = <S, A>(
  reducer: React.Reducer<S, A>
): React.Reducer<S, A> => {
  return (state: S, action: A): S => {
    if (process.env.NODE_ENV === "development") {
      console.log("Dispatching:", action);
      console.log("State:", state);
    }
    return reducer(state, action);
  };
};
