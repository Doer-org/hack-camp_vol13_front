import { FC } from "react"
import { ImFire } from "react-icons/im"
import { AppContainer } from "../layout/AppContainer"

interface IProps {
  className?: string
}

export const SecDiscussion: FC<IProps> = ({className}) => {
  return (
    <div className={className}>
      <AppContainer>
        <h3 className="flex items-center mb-4 text-2xl font-semibold">
          <ImFire className="mr-2 text-orange-600"/>
          Hot Discussions
        </h3>
        <div className="divide-y">
          {/* TODO Discussion list 実装 */}
          {/* <DiscussionList/>
          <DiscussionList/>
          <DiscussionList/>
          <DiscussionList/>
          <DiscussionList/>
          <DiscussionList/> */}
        </div>
      </AppContainer>
    </div>
  )
}