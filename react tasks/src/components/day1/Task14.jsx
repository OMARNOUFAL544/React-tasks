import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Child() {
  const notify = () => toast('This Toast from child');

  return (
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}