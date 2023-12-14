@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // tambahkan metode pencarian karyawan jika diperlukan
}
