import { Card, CardContent } from "@/components/ui/card"

const Banner = () => {
  return (
    <Card className="bg-white rounded-xl mb-4">
      <CardContent className="p-4">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4">
          <h3 className="text-xl font-bold mb-2">실전 앱개발 경진대회</h3>
          <h4 className="text-lg font-bold mb-1">참가자 모집</h4>
          <p className="text-sm text-gray-600">
            주최/참여: 두곳으로 협력하는 서로 간 긍정적인 임팩트 발견하기
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Banner