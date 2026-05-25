import ChatBot from "./_components/chatbot";

export default function CreateNewTrip() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gp-5 ">
      <div>
        <ChatBot/>
      </div>

      <div>Make and Trip Plan to Display</div>
    </div>
  );
}
