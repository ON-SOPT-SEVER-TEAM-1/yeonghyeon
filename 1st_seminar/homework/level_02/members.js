const serverMembers_01 = [
    {
        name  : '이수진',
        address : '고양시',
        age : 23,
        hobby : '닌텐도 게임'
    },
    {
        name  : '양재욱',
        address : '서초구 잠원동',
        age : 25,
        hobby : '운동하기'
    },
    {
        name  : '신지혜',
        address : '쌍문역',
        age : 23,
        hobby : '산책'
    },
    {
        name  : '이현주',
        address : '용산구 청파동',
        age : 24,
        hobby : '넷플릭스'
    },
    {
        name  : '남궁권',
        address : '부천시 원종동',
        age : 26,
        hobby : '산책'
    }
]

serverMembers_01.forEach(info => {
    console.log(`name : ${info.name}`);
    console.log(`address : ${info.address}`);
    console.log(`age : ${info.age}`);
    console.log(`hobby : ${info.hobby}\n`);
})