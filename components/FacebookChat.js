import {
  CustomChat,
  FacebookProvider,
} from "react-facebook";

const FacebookChat = ({
  pageId = "637956649398706",
  appId = "1361476231636960",
}) => {
  return (
    <FacebookProvider appId={appId} chatSupport>
      <CustomChat pageId={pageId} minimized={false} />
    </FacebookProvider>
  );
};

export default FacebookChat;
