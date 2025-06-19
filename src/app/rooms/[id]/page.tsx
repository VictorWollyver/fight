import { joinRoomById } from "@/app/actions/rooms";
import ClickBox from "@/components/ClickBox";
import LeaveButton from "./LeaveButton";
import { setCookie } from "@/app/actions/cookies";

const LobbyPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id;
	const { data } = await joinRoomById(id);

	return (
		<main className="w-[720px]">
			<h1 className="text-9xl text-center w-full">
				Sala: <span className="title">{data?.name}</span>
			</h1>
			<div className="flex gap-6">
				<input style={{ flex: 1 }} type="text" value={`${process.env.FRONT_URL}/rooms/${data?.id}`} readOnly className="text-4xl mt-6 w-full border-[5px] h-24 rounded-xl border-black border-solid bg-transparent" />

				<button type="button" className="text-4xl px-10 mt-6 border-[5px] h-24 rounded-xl border-black border-solid">
					COPIAR
				</button>
			</div>

			<ClickBox room={data} />

			<div className="flex gap-4">
				{/* <JoinButton roomId={data?.id} /> */}
				<LeaveButton roomId={data?.id} />
			</div>
		</main>
	);
};

export default LobbyPage;
