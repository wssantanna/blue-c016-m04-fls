
export default function App() {


	return (
		<>
			<div className="container mt-5 mb-3">

				<h1>My Todo List</h1>

				<div className="d-flex gap-2 mt-5 mb-3">

					<input
						className="form-control form-control-lg"
						type="text"
						placeholder="Add your task..."
						aria-label="Add your task..."
					/>

					<button
						className="btn btn-success btn-lg"
						type="button"
					>
						+
					</button>

				</div>

				<div className="row">
					<div className="col">
						<ul className="list-group">
							<li className="list-group-item d-flex align-items-center justify-content-between py-3">
								<div>
									<input
										className="form-check-input me-3"
										type="checkbox"
										value=""
										id="firstCheckbox"
									/>
									<label
										className="form-check-label"
										htmlFor="firstCheckbox"
									>
										My first task
									</label>
								</div>
								<div className="d-flex gap-2">
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#editModal"
									>
										Edit
									</button>
									<button
										type="button"
										class="btn btn-danger"
									>
										Delete
									</button>
								</div>
							</li>
							<li className="list-group-item d-flex align-items-center justify-content-between py-3">
								<div>
									<input
										className="form-check-input me-3"
										type="checkbox"
										value=""
										id="secondCheckbox"
									/>
									<label
										className="form-check-label"
										htmlFor="secondCheckbox"
									>
										Second checkbox
									</label>
								</div>
								<div className="d-flex gap-2">
									<button
										type="button"
										class="btn btn-primary"
									>
										Edit
									</button>
									<button
										type="button"
										class="btn btn-danger"
									>
										Delete
									</button>
								</div>
							</li>
							<li className="list-group-item d-flex align-items-center justify-content-between py-3">
								<div>
									<input
										className="form-check-input me-3"
										type="checkbox"
										value=""
										id="third Checkbox"
									/>
									<label
										className="form-check-label"
										htmlFor="third Checkbox"
									>
										Third checkbox
									</label>
								</div>
								<div className="d-flex gap-2">
									<button
										type="button"
										class="btn btn-primary"
									>
										Edit
									</button>
									<button
										type="button"
										class="btn btn-danger"
									>
										Delete
									</button>
								</div>
							</li>
						</ul>
					</div>
				</div>


				<div
					class="modal fade"
					id="editModal"
					tabindex="-1"
					aria-labelledby="modalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div className="modal-header">
								<h1 className="h5 mb-0">Edit task</h1>
							</div>
							<div class="modal-body">
								<div class="mb-3">
									<label
										htmlFor="inputEditTask"
										class="form-label"
									>
										Current task
									</label>
									<input
										type="text"
										class="form-control"
										id="inputEditTask"
										placeholder="My current task"
									/>
								</div>
								<div class="mb-3">
									<label
										htmlFor="inputDescriptionTask"
										class="form-label"
									>
										Description task
									</label>
									<textarea
										class="form-control"
										id="inputDescriptionTask"
										rows="3"
										placeholder="My description task"
									></textarea>
								</div>
							</div>
							<div class="modal-footer">
								<button
									class="btn btn-secondary"
									type="button"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button
									class="btn btn-primary"
									type="button"
								>
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}