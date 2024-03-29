import { IThread } from "@/domain/thred"
import { IUser } from "@/domain/user"
import { TrendThreadAPI } from "@/handler/api/trend"
import { userSelector } from "@/redux/selectors/user"
import { FC, useEffect, useState } from "react"
import { ImFire } from "react-icons/im"
import { useSelector } from "react-redux"
import { DiscussionList } from "../atoms/discussionList"
import { AppContainer } from "../layout/AppContainer"


interface IProps {
  className?: string
  // DiscussionList: IThread[]
}

export const SecDiscussion: FC<IProps> = ({className}) => {
  const [trendThreads, setTrendThreads] = useState<IThread[]>([])
  const [user, setUser] = useState<IUser>(useSelector(userSelector))


  // スレッド一覧を取得
  useEffect(() => {
    (async () => {
      const trendThreads = await TrendThreadAPI.getTrendThreads()
      setTrendThreads(trendThreads)
    })()
  }, [])
  
  return (
    <div className={className}>
      <AppContainer>
        <h3 className="flex items-center mb-4 text-2xl font-semibold">
          <ImFire className="mr-2 text-orange-600"/>
          Hot Discussions
        </h3>
        <div className="divide-y">
          {/* TODO Discussion list 実装 */}
 
          {
            trendThreads.map((trendThread,key)=>{
              return <DiscussionList key={key} thread={trendThread} user={user} /> 
            })
          }
        </div>
      </AppContainer>
    </div>
  )
}