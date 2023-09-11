{
    // Union Type: | 이면
    // Intersection Type: &

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void; // 아무런 인자도 받지 않고 아무것도 리턴하지 않는 함수 
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    internWork({
        name: 'boyoung',
        score: 10,
        employeeId: 1,
        work: ()=>{}, // 빈 함수넣어야함. Worker 타입 참조
    })

}